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
        description: "Engineering for flow — where focus, intent, and execution converge.",
    },
    about: {
        title: "About Me",
        description: [
            "I am a passionate frontend engineer with a keen eye for design. Driven by a deep respect for [[flow]] — the state where attention sharpens and meaningful work happens without resistance. I believe flow isn’t limited to coding; it appears in music, film, and any craft refined with care. My approach to software engineering centers on reducing friction, designing clear mental models, and building interfaces that feel intuitive enough to disappear, allowing users — and teams — to stay fully immersed in the problem at hand.",
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
            {
                title: "IBM",
                category: "Software Engineer",
                tenure: "Jan/21 - June/21",
                image: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
                url: "https://www.ibm.com/",
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
