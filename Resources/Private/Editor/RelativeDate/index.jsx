// @ts-ignore
import React, { useState, useEffect } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { IconButton, SelectBox, TextInput } from "@neos-project/react-ui-components";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes } from "./Tokens.stylex";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.Editor.RelativeDate"),
}));

const defaultOptions = {
    disabled: false,
    allowEmpty: true,
    allowFuture: true,
    allowPast: true,
    timeSpans: {
        minute: false,
        hour: false,
        day: true,
        week: true,
        month: true,
        year: true,
    },
};

const styles = stylex.create({
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*) *": {
            pointerEvents: "none",
        },
    },
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: sizes.spacingHalf,
    },
    row: {
        display: "flex",
        gap: sizes.spacingHalf,
    },
});

// @ts-ignore
function Editor(props) {
    const options = { ...defaultOptions, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry, id } = props;
    const { disabled, allowEmpty, allowFuture, allowPast, timeSpans } = options;
    const units = Object.entries(timeSpans)
        .map(([unit, enabled]) => (enabled ? unit : false))
        .filter(Boolean);
    const firstUnit = units[0];

    const hasAmount = typeof value?.amount == "number";
    const [amount, setAmount] = useState(hasAmount ? Math.abs(value.amount) : "");
    const [unit, setUnit] = useState(value?.unit || firstUnit);
    const [tense, setTense] = useState(hasAmount ? (value.amount < 0 ? -1 : 1) : allowFuture ? 1 : -1);
    const plural = amount == 1 ? "" : "s";

    useEffect(() => {
        if (amount === "") {
            if (hasAmount) {
                // Empty the field
                commit("");
            }
            return;
        }

        const newValue = {
            amount: tense * amount,
            unit: unit || firstUnit,
        };

        // Check equality
        if (value?.amount === newValue.amount && value?.unit === newValue.unit) {
            return;
        }

        commit(newValue);
    }, [amount, unit, tense]);

    const tenseOptions = [
        allowPast
            ? {
                  value: -1,
                  label: i18nRegistry.translate(
                      `Carbon.Editor.RelativeDate:Main:${amount ? "inThePast" : amount === "" ? "currentDate" : `currentDate.${unit}`}`,
                  ),
              }
            : null,
        allowFuture
            ? {
                  value: 1,
                  label: i18nRegistry.translate(
                      `Carbon.Editor.RelativeDate:Main:${amount ? "inTheFuture" : amount === "" ? "currentDate" : `currentDate.${unit}`}`,
                  ),
              }
            : null,
    ].filter(Boolean);

    const unitOptions = units.map((value) => ({
        value,
        label: i18nRegistry.translate(`Carbon.Editor.RelativeDate:Main:${value}${plural}`),
    }));

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled, highlight && styles.highlight)}>
            <div {...stylex.props(styles.row)}>
                <TextInput
                    id={id}
                    type="text"
                    value={amount}
                    onChange={(value) => {
                        const number = parseInt(value);
                        if (isNaN(number)) {
                            setAmount(allowEmpty ? "" : 0);
                            return;
                        }
                        setAmount(Math.abs(number));
                    }}
                />
                <SelectBox
                    options={unitOptions}
                    value={unit}
                    onValueChange={setUnit}
                    disabled={!amount && amount !== 0}
                />
            </div>
            <div {...stylex.props(styles.row)}>
                <SelectBox
                    options={tenseOptions}
                    value={tense}
                    onValueChange={setTense}
                    disabled={!amount || !allowPast || !allowFuture}
                />
                {allowEmpty && (
                    <IconButton
                        style="light"
                        icon="times"
                        title={i18nRegistry.translate("Carbon.Editor.RelativeDate:Main:reset")}
                        onClick={() => setAmount("")}
                    />
                )}
            </div>
        </div>
    );
}

export default neosifier(Editor);
