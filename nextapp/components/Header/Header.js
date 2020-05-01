    import React from "react";
    import styles from './Header.module.scss';
    import Link from "next/link";
    import { FaBars } from "react-icons/fa";

    export default function Header(props) {
    return (
        <div className={styles.Header}>
        <div className="uk-container">
            <div className="uk-child-width-1-2">
            <div className="">
                <Link href="/">
                    <a>
                <h1 className={styles.logo}>Christopher K. Jones</h1>
                </a>
                </Link>
            </div>
            <div className="uk-text-right">
                <div className="offcanvas-content">
                
                    <FaBars />

                {/* <vk-offcanvas id="taco" :show.sync="show">
                <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
                <ul class="main-nav">
                    <li class="navitem" @click="show = false">
                    <router-link exact to="/">Home</router-link>
                    </li>
                    <li 
                    v-for="(item, index) in navigation"
                    :key="index"
                    @click="show = false"
                    class="navitem">
                    <router-link exact :to="item.path">{{ item.name }}</router-link>
                    </li>
                    <li @click="show = false" class="navitem">
                    <router-link exact to="/contact">Get In Touch</router-link>
                    </li>
                </ul>
                </vk-offcanvas> */}
                </div>
                
            </div>
            </div>
        </div>
        </div>
    );

    }
