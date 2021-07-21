export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

export const isDarkTheme = () => {
    const date = new Date();

    if (date.getHours() > 18 || date.getHours() < 5) {
        return true;
    }

    return false;
};
