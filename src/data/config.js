export const config = {
    meta: {
        title: "Shrey Soni | Frontend Engineer",
        description: "Portfolio of Shrey Soni, a Frontend Engineer crafting beautiful and performant UIs.",
    },
    navbar: {
        links: [
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
        ],
    },
    hero: {
        subtitle: "Shrey Soni",
        title: {
            line1: "Frontend",
            line2: "Engineer",
        },
        description: "Crafting beautiful and performant UIs with a focus on minimalism, aesthetics, and smooth interaction.",
    },
    about: {
        title: "About Me",
        description: [
            "I am a passionate frontend engineer with a keen eye for design. I believe that good software should not only function perfectly but also provide a delightful user experience.",
            "My approach to development is grounded in minimalism – stripping away the non-essential to let the core purpose shine. Whether it's a complex web application or a simple portfolio, I strive for elegance in code and design.",
        ],
        skills: {
            design: {
                title: "Design",
                list: "UI/UX, Minimalism, Interaction Design, Animation",
            },
            development: {
                title: "Skills",
                list: "React, Next, JavaScript, TypeScript, Redux",
            },
        },
    },
    experience: {
        title: "Experience",
        items: [
            {
                title: "Tekion Corp",
                category: "Frontend Engineer - 2",
                tenure: "May/24 - Present",
                url: "https://tekion.com",
                image: "https://images.g2crowd.com/uploads/product/image/e8d2bd1fbe33858f182ede6ea019f466/tekion.png",
            },
            {
                title: "Brick&Bolt",
                category: "Frontend Engineer",
                tenure: "Feb/23 - May/24",
                image: "https://media.licdn.com/dms/image/v2/D560BAQFxsfYjPCJTDA/company-logo_200_200/company-logo_200_200/0/1712045497210/bricknbolt_logo?e=2147483647&v=beta&t=WTM8-vDChfkD7HvCfOEVZNcN_cEt8gwty5SZrz4noqY",
                url: "https://www.bricknbolt.com/",
            },
            {
                title: "BlueStacks",
                category: "Member of Technical Staff - Development",
                tenure: "June/21 - Feb/23",
                image: "https://www.interviewchacha.com/images/company_logos/bluestack.jpg",
                url: "https://www.bluestacks.com/",
            },
        ],
    },
    contact: {
        title: "Let's work together.",
        email: "shreysoni.dev@gmail.com",
        footerLinks: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/shreysoni" },
            { label: "GitHub", href: "https://github.com/shrey-soni" },
            { label: "LeetCode", href: "https://leetcode.com/shreysoni" },
        ],
    },
};
