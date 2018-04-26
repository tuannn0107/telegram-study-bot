package com.study.telegram.utils;

/**
 * https://core.telegram.org/bots/api#formatting-options
 */
public enum ParseModeTypes {
    MARKDOWN("Markdown"),
    HTML("HTML");

    private final String text;

    /**
     * @param text
     */
    ParseModeTypes(final String text) {
        this.text = text;
    }

    /* (non-Javadoc)
     * @see java.lang.Enum#toString()
     */
    @Override
    public String toString() {
        return text;
    }
}
