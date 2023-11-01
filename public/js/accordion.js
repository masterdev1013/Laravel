const faqs = [
    {
        title: "Music Artist.",
        message: `Cost to launch music career Independently is very expensive, estimated around $500K to $2M
An exchange where Music artists list as their own startups, music fans can invest.

Streaming platforms significantly shortchanges the value of the average music artist.
DEFI pay per/view streaming with increased NFT value for unlimited song access.

No way to connect with quality assured reputable music industry professionals.
Marketplace to connect businesses offering pro services to listed artists brands.

Artists lack a business mindset and understanding of music industry contracts.
Smart Contract & Fund Management, reduce risk & still maximise profits for investors.

Upcoming, Independent & Major Artists. All artists can get listed and raise the capital they need to launch or enhance their music careers or brand. Imagine 20,000 of your true fans invested $100 that is $2,000,000 for you to build your brand and stay in control of your business independent or signed inside a new global music Industry and artist focused economy.`,
    },
    {
        title: "Investors.",
        message: `Imagine at the click of a button you could own a share in Justin Bieber, Beyonce's brand? Most importantly imagine investing in your friend, or favourite upcoming artists that you discovered or follow online and got paid a profit share of the royalties generated from that artist brand directly into your account digital wallet, as a return on investment from their brands growth in revenue generated across the industry.

        Most people have a friend or family aspiring to become music artists. Record labels simply cannot sign every single artist on the planet.
        
        Artist brands, such as Jay Z, Kanye West who are worth billions through successful music careers, the establishment and funding of their own music label, and making smart investments. Assume you had the option to invest into it, into their brand when they were upcoming startup artists and held that stock till now with an opportunity for generating passive income from royalties & being a true fan with skin in the game automatically sharing in their success.`,
    },
    {
        title: "Business.",
        message: `All businesses, freelancers services can connect and grow with artist brands, such as Producers, Song writers, Beat maker, Advertisers, Radio, Influencers, Artist managers, Record labels, Spotify, YouTube, Soundcloud + more.`,
    },
    {
        title: "Blockchain.",
        message: `The Valyou X Token is a cryptocurrency that is required for entry into the new global Global Music Industry.By staking Valyou X tokens against the platform' s stable currency VXD. It may be used for payments, streaming, and investment in tokenised music artist brands as a new type of digital asset, enhancing investor confidence and preventing fraud.`,
    },
];

const accordion = document.getElementById("accordion");

function update(index) {
    const acc = document.getElementById(`accordion-child-${index}`);
    if (!acc) return;

    const target = faqs[index];
    const [title, message] = [...acc.children];

    title.children
        .item(1)
        .classList.replace(
            !target.open ? "fa-plus" : "fa-minus",
            !target.open ? "fa-minus" : "fa-plus"
        );

    message.classList.replace(
        !target.open ? "hidden" : "block",
        !target.open ? "block" : "hidden"
    );

    target.open ? (target.open = false) : (target.open = true);
}

//intial load
faqs.forEach((faq, i) => {
    faq.open = false;

    const parent = document.createElement("div");
    parent.className = "flex flex-col rounded darken";
    parent.id = `accordion-child-${i}`;

    const title = document.createElement("div");
    title.addEventListener("click", () => {
        update(i);
    });

    title.className =
        "flex m-5 justify-between items-center hover:cursor-pointer";
    title.innerHTML = `
        <h1 class="text-3xl font-bold text-[#050f3f]">${faq.title}</h1>
        <i class="fa fa-plus text-blue-500 text-xl"></i>`;

    const message = document.createElement("p");
    message.className = `mx-5 mb-5 text-[#050f3f] hidden`;
    message.innerText = faq.message;

    parent.appendChild(title);
    parent.appendChild(message);
    accordion.appendChild(parent);
});
