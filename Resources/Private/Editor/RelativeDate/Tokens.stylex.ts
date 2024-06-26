import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
    primaryBlue: "var(--colors-PrimaryBlue)",
    primaryBlueHover: "var(--colors-PrimaryBlueHover)",
    contrastNeutral: "var(--colors-ContrastNeutral)",
    warn: "var(--colors-Warn)",
    error: "var(--colors-Error)",
});

export const sizes = stylex.defineVars({
    input: "calc(var(--spacing-Full) + var(--spacing-Half))",
    spacingFull: "var(--spacing-Full)",
    spacingHalf: "var(--spacing-Half)",
    spacingQuarter: "var(--spacing-Quarter)",
    borderRadius: "2px",
    goldenUnit: "var(--spacing-GoldenUnit)",
});
