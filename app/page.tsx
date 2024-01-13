import Card from "@/components/Card";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { api } from "@/utils/api";
import SponsorCard from "@/components/SponsorCard";

export const getData = async () => {
    const res = await api.get("?target=sponsors");
    const sponsors: ({
        name: string;
        tier: string;
        logo: string;
    })[] = await res.json();

    return { sponsors };
}

export default async function Page() {
    const { sponsors } = await getData();

    return (
        <main>
            <Header>
                <h1>App Dev Club</h1>
                <p>At the University of Maryland</p>

                <div className={styles.headerBtns}>
                    <a className="btn" target="blank" href="https://discord.com/invite/scSeVbTT7G">Chat with us on Discord</a>
                    <a className="btn" href="https://www.instagram.com/appdev_umd">Follow us on Instagram</a>
                    <a className="btn" href="https://terplink.umd.edu/organization/app-dev-club">Join us on TerpLink</a>
                </div>
            </Header>

            <Card title="About Us">
                <p>
                    App Dev Club is a group of students at UMD who have a burning
                    desire to develop software. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Malesuada proin libero nunc
                    consequat interdum varius sit amet mattis. Sit amet luctus
                    venenatis lectus magna fringilla urna porttitor rhoncus.
                    Molestie a iaculis at erat pellentesque adipiscing commodo
                    elit at. Convallis posuere morbi leo urna molestie at. Quis enim
                    lobortis scelerisque fermentum dui faucibus in ornare. Mi tempus
                    imperdiet nulla malesuada pellentesque elit eget. Orci nulla pellentesque
                    dignissim enim sit amet venenatis urna. Consequat id porta nibh venenatis
                    cras sed felis eget velit. Non blandit massa enim nec dui nunc. Risus commodo
                    viverra maecenas accumsan lacus vel. Lobortis feugiat vivamus at augue eget
                    arcu dictum varius duis. Varius vel pharetra vel turpis nunc eget lorem dolor
                    sed. A iaculis at erat pellentesque adipiscing commodo elit.
                </p>
            </Card>

            <Card title="Sponsors">
                <p>We want to give a special shout-out 
                    to our corporate sponsors who are 
                    helping make our mission possible.
                </p>

                {sponsors.map(s => <SponsorCard {...s} />)}
            </Card>
        </main>
    );
}