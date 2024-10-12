import styles from "./header.module.css";
import Logo from "@/images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftWrapper}>
        {/* <div className="burger-menu__btn rounded-[5px] hidden lg:block w-[32px] h-[32px] mr-1">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div> */}

        <a className={styles.logoWrapper}>
          <img src="./images/logo.svg" alt="logo" className={styles.logo} />

          <div className={styles.name}>
            <span>wow</span>
            <span>hunt</span>
          </div>
        </a>

        <button className={styles.catalogBtn}>
          <img src="./images/catalog.png" alt="catalog" />

          <span>Catalog</span>
        </button>

        <div className="header__input-search relative lg:w-1/4 sm:hidden">
          <input
            className="text-white rounded-xl w-full text-2xl py-2.5 pl-3 pr-11 xxl:text-xl xxl:py-1.5 xxl:pl-2.5 xxl:pr-9 xl:text-base xl:py-1 xl:pl-2 xl:pr-8 xl:rounded-lg x:text-sm lg:text-xs lg:rounded-md lg:pr-5"
            type="text"
            placeholder="Search"
          />

          <a className="cursor-pointer">
            <img
              src="https://wowhunt.com/build/assets/search-icon.faa8b505.svg"
              alt="Поиск"
              className="top-1/2 h-5 xxl:h-4 x:h-3 absolute -translate-y-1/2"
            />
          </a>
        </div>

        <span className="header__modal-btn transition-all text-2xl xxl:text-xl xl:text-base x:text-sm text-white cursor-pointer lg:text-xs sm:hidden">
          Work With Us
        </span>

        <a
          href="/"
          className="header-support text-white relative rounded-xl cursor-pointer pr-5 pl-12 py-2.5 text-2xl mr-12 xxl:pr-4 xxl:pl-10 xxl:py-1.5 xxl:text-xl xxl:mr-10 lg:mr-4 xl:rounded-lg xl:text-base xl:pr-3 xl:pl-8 xl:py-1 xl:mr-8 x:mr-6 x:text-sm lg:text-xs lg:rounded-md lg:pl-6 sm:hidden"
        >
          <div className="support__green-dot absolute w-2 h-2 xxl:w-1.5 xl:h-1.5 xxl:w-1 xl:h-1 rounded-full top-1/2 -translate-y-1/2"></div>
          <span className="whitespace-nowrap">Contact Support</span>
        </a>
      </div>

      <div className="relative flex items-center">
        <div className="hidden sm:block relative w-[32px] h-[32px] mr-2 transition-all">
          <div className="w-full h-full transition-all">
            <input
              placeholder="Search"
              type="text"
              className="header__input-mobile text-white w-full h-full rounded-md"
            />

            <a href="/search">
              <img
                src="https://wowhunt.com/build/assets/search-icon.faa8b505.svg"
                alt="search"
                className="absolute pointer-events-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-4"
              />
            </a>
          </div>
        </div>

        <div className="text-white mr-12 xxl:mr-8 xl:mr-7 x:mr-6 lg:mr-2 text-2xl xxl:text-xl xl:text-base x:text-sm">
          <div className="flex items-center">
            <div className="flex gap-5 ap-5 xxl:gap-4 xl:gap-3 x:gap-2 mr-4 sm:hidden">
              <a
                href="https://www.trustpilot.com/review/wowhunt.com"
                target="_blank"
              >
                <img
                  src="https://wowhunt.com/build/assets/trustpilot.a8480742.png"
                  className="w-3/4 mx-auto"
                />
                <div className="text-xs text-center">
                  TrustScore 4.9 | 650 reviews
                </div>
              </a>
            </div>
            <div className="flex gap-5 ap-5 xxl:gap-4 xl:gap-3 x:gap-2">
              <div className="radio_btn">
                <input id="0" type="radio" name="radio-lang" />
                <label
                  htmlFor="0"
                  className="radio_btn--label uppercase rounded-lg xl:rounded p-3 xxl:p-2.5 xl:p-2 x:p-1.5 lg:p-1"
                >
                  Eu
                </label>
              </div>
              <div className="radio_btn">
                <input id="1" type="radio" name="radio-lang" />
                <label
                  htmlFor="1"
                  className="radio_btn--label uppercase rounded-lg xl:rounded p-3 xxl:p-2.5 xl:p-2 x:p-1.5 lg:p-1"
                >
                  Us
                </label>
              </div>
            </div>
          </div>
        </div>

        <a
          className="flex items-center relative cursor-pointer"
          href="/shopping-card"
        >
          <div className="header__shop-button flex items-center justify-center rounded-xl w-14 h-14 xxl:w-11 xxl:h-11 xl:rounded-lg xl:w-9 xl:h-9 lg:rounded-md lg:w-8 lg:h-8">
            <img
              src="https://wowhunt.com/build/assets/basket-icon.4ce3bc52.svg"
              alt="Basket"
              className="h-6 xxl:h-5 xl:h-4"
            />
          </div>
        </a>
      </div>
    </header>
  );
}
