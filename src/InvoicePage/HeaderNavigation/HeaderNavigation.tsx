import React from "react";
import { MatchMediaWrapper } from "../MatchMedia/MatchMediaWrapper";
import { ReactComponent as BackIcon } from "../../assets/img/icon/backIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeIcon.svg";
import { ReactComponent as BackIconMobile } from "../../assets/img/icon/backIconMobile.svg";
import { ReactComponent as CloseIconMobile } from "../../assets/img/icon/closeIconMobile.svg";
import style from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  const title = <h2 className={style.title}>Выставление счёта</h2>;

  const desktopContent = (
    <div className={style.container}>
      <button>
        <BackIcon className={style.iconBtn} />
      </button>
      {title}
      <button>
        <CloseIcon className={style.iconBtn} />
      </button>
    </div>
  );

  const mobileContent = (
    <div className={style.container}>
      <button>
        <BackIconMobile className={style.iconBtn} />
      </button>
      {title}
      <button>
        <CloseIconMobile className={style.iconBtn} />
      </button>
    </div>
  );

  return (
    <MatchMediaWrapper
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default HeaderNavigation;
