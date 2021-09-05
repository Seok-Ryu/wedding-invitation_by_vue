const isDarkThemeTime = () => {
    const date = new Date();

    // date.setHours(10);

    if (date.getHours() > 18 || date.getHours() < 5) {
        return true;
    }

    return false;
}

const getLocaleByNavigator =  () => {
    const temp = navigator.language || navigator.userLanguage;
    const language = temp.toLowerCase();

    if (language.includes('ko')) {
        return 'ko'
    }

    return 'en'
}

const settings = {
    isDarkTheme: isDarkThemeTime(),
    locale: getLocaleByNavigator(),
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

export const isSupportedCopyCommand = () => {
    return document.queryCommandSupported("copy");
}

export const doCopyCommand = (event) => {
    const inputElement = document.createElement("input");
    inputElement.value = event?.target?.innerText || event;

    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);

    return true;
}

export const isDarkTheme = () => {
    return settings.isDarkTheme;
};

export const getLocale = () => {
    return settings.locale;
}

export const setLocale = (_this, locale) => {
    settings.locale = locale === 'ko' ? 'ko' : 'en';
    _this.$i18n.locale = settings.locale;
}

export const setTheme = (isDark) => {
    settings.isDarkTheme = isDark;
}
