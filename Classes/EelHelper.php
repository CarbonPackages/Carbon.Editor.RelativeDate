<?php

namespace Carbon\Editor\RelativeDate;

use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;
use DateTime;

#[Flow\Proxy(false)]
class EelHelper implements ProtectedContextAwareInterface
{
    /**
     * Get the date based on the amount and unit
     *
     * @param array|null $amountAndUnit
     * @return DateTime|null
     */
    public function getDate(?array $amountAndUnit): ?DateTime
    {
        $amount = $amountAndUnit['amount'] ?? null;
        $date = new DateTime();
        if ($amount === 0) {
            return $date;
        }
        $unit = $amountAndUnit['unit'] ?? null;

        if (!in_array($unit, ['day', 'week', 'month', 'year']) || !is_int($amount)) {
            return null;
        }

        $modifier = sprintf('%s%d %s', $amount < 0 ? '' : '+', $amount, $unit);
        return $date->modify($modifier);
    }

    /**
     * All methods are considered safe
     *
     * @param string $methodName The name of the method
     * @return bool
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
