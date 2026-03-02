/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: '#222222',
                'background-light': '#333333',
                foreground: '#d6d6d6',
                'foreground-strong': '#ffffff',
                'foreground-weak': '#999999',
                primary: '#ff4747',
                'primary-light': '#ff8787',
            },
        },
    },
    plugins: [],
}
