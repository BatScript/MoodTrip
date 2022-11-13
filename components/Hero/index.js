import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className={styles.globeContainer}>
            <div className={styles.hero}>
                <h1>
                    Unplanned trips are best until you&apos;re stranded at
                    unknown place.
                </h1>
                <Link href="/addTrip">
                    <Button
                        text="Plan Now"
                        width="150px"
                        background="#1C6758"
                        color="white"
                        margin="20px 35px"
                    />
                </Link>
            </div>
            <Image
                width={600}
                height={600}
                src="/images/globeClouds.svg"
                alt="globe"
            />
        </section>
    );
};

export default Hero;
