import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Atlas specific colors
        "brightblue": "hsl(var(--brightblue))",
        "orange": "hsl(var(--orange))",
        "gold": "hsl(var(--gold))",
        "deepblue": "hsl(var(--deepblue))",
        "dark-600": "#1a1a1a",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      spacing: {
        "0.75": "0.1875rem", // 3px
        "1.75": "0.4375rem", // 7px
        "2.25": "0.5625rem", // 9px
        "3.25": "0.8125rem", // 13px
        "3.5": "0.875rem", // 14px
        "3.75": "0.9375rem", // 15px
        "4.5": "1.125rem", // 18px
        "5.5": "1.375rem", // 22px
        "6.25": "1.5625rem", // 25px
        "6.75": "1.6875rem", // 27px
        "7.5": "1.875rem", // 30px
        "8.5": "2.125rem", // 34px
        "8.75": "2.1875rem", // 35px
        "10.5": "2.625rem", // 42px
        "10.75": "2.6875rem", // 43px
        "11.25": "2.8125rem", // 45px
        "12.5": "3.125rem", // 50px
        "13.75": "3.4375rem", // 55px
        "15": "3.75rem", // 60px
        "17.5": "4.375rem", // 70px
        "18.75": "4.6875rem", // 75px
        "20": "5rem", // 80px
        "21.25": "5.3125rem", // 85px
        "21.5": "5.375rem", // 86px
        "22.5": "5.625rem", // 90px
        "25": "6.25rem", // 100px
        "26.25": "6.5625rem", // 105px
        "27.5": "6.875rem", // 110px
        "28.75": "7.1875rem", // 115px
        "30": "7.5rem", // 120px
        "32.5": "8.125rem", // 130px
        "35": "8.75rem", // 140px
        "37.5": "9.375rem", // 150px
        "40": "10rem", // 160px
        "40.5": "10.125rem", // 162px
        "41.25": "10.3125rem", // 165px
        "42.5": "10.625rem", // 170px
        "43.75": "10.9375rem", // 175px
        "50": "12.5rem", // 200px
        "51": "12.75rem", // 204px
        "55": "13.75rem", // 220px
        "57.5": "14.375rem", // 230px
        "60": "15rem", // 240px
        "62.5": "15.625rem", // 250px
        "64.5": "16.125rem", // 258px
        "65": "16.25rem", // 260px
        "70": "17.5rem", // 280px
        "71.75": "17.9375rem", // 287px
        "72": "18rem", // 288px
        "73": "18.25rem", // 292px
        "75": "18.75rem", // 300px
        "80": "20rem", // 320px
        "82.5": "20.625rem", // 330px
        "85": "21.25rem", // 340px
        "88": "22rem", // 352px
        "90": "22.5rem", // 360px
        "100": "25rem", // 400px
        "100.5": "25.125rem", // 402px
        "105": "26.25rem", // 420px
        "107.5": "26.875rem", // 430px
        "108": "27rem", // 432px
        "110.5": "27.625rem", // 442px
        "112.5": "28.125rem", // 450px
        "117.5": "29.375rem", // 470px
        "120": "30rem", // 480px
        "125": "31.25rem", // 500px
        "127.5": "31.875rem", // 510px
        "150": "37.5rem", // 600px
        "160": "40rem", // 640px
        "170": "42.5rem", // 680px
        "171.25": "42.8125rem", // 685px
        "175": "43.75rem", // 700px
        "187.5": "46.875rem", // 750px
        "192": "48rem", // 768px
        "195": "48.75rem", // 780px
        "200": "50rem", // 800px
        "207.5": "51.875rem", // 830px
        "220": "55rem", // 880px
        "225": "56.25rem", // 900px
        "237.5": "59.375rem", // 950px
        "250": "62.5rem", // 1000px
        "255": "63.75rem", // 1020px
        "275": "68.75rem", // 1100px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2lg": "0.625rem", // 10px
        "xxl": "1.25rem", // 20px
        "2xxl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "5xl": "2.5rem", // 40px
        "6xl": "3rem", // 48px
        "8xl": "4rem", // 64px
        "25xl": "6.25rem", // 100px
      },
      fontSize: {
        "22": "1.375rem", // 22px
        "26": "1.625rem", // 26px
        "28": "1.75rem", // 28px
        "32xl": "2rem", // 32px
        "36": "2.25rem", // 36px
        "38": "2.375rem", // 38px
        "40": "2.5rem", // 40px
        "42": "2.625rem", // 42px
        "45xl": "2.8125rem", // 45px
        "46": "2.875rem", // 46px
        "48": "3rem", // 48px
        "62xl": "3.875rem", // 62px
        "80": "5rem", // 80px
        "83": "5.1875rem", // 83px
        "25xl": "6.25rem", // 100px
      },
      fontFamily: {
        sans: ['Figtree', 'Montserrat', 'sans-serif'],
        display: ['Kaushan Script', 'cursive'],
        title: ['Afacad', 'sans-serif'],
        base: ['Figtree', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10px)" },
        },
        "slide-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        "slide-top2": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        "rotate-center": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-90-br-cw": {
          "0%": { transform: "rotate(0deg)", transformOrigin: "100% 100%" },
          "100%": { transform: "rotate(90deg)", transformOrigin: "100% 100%" },
        },
        "moveCloud": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "header-scroll-animation": {
          "0%": { top: "-100px" },
          "100%": { top: "0" },
        },
        "count-up": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "slide-left": "slide-left 1s ease-in-out infinite alternate",
        "slide-top": "slide-top 2s ease-in-out infinite alternate",
        "slide-top2": "slide-top2 3s ease-in-out infinite alternate",
        "rotate-center": "rotate-center 20s linear infinite",
        "rotate-90-br-cw": "rotate-90-br-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "moveCloud": "moveCloud 30s linear infinite",
        "header-scroll-animation": "header-scroll-animation 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
