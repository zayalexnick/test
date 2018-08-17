export interface ThemeConfigInterface {
    colors: {
        [name: string]: string | number;
    },
    animation: {
        [name: string]: string | number;
    }
}

const ThemeConfig: ThemeConfigInterface = {
    colors: {
        primary: '#fff'
    },
    animation: {
        speed: '0.3s'
    }
};

export default ThemeConfig;