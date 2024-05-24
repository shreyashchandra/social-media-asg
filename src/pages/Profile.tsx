import { useNavigate } from "react-router-dom";
import { ProfilePic, SmallBtn } from "../components";

export const Profile = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="w-full shadow-sm shadow-gray-200">
        <div className="p-5 flex items-center justify-between">
          <SmallBtn onClick={btnHandler} />

          <h1 className="text-2xl font-semibold">Profile</h1>

          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1479 21.322C11.893 21.3221 11.6484 21.2211 11.4679 21.041L2.13293 11.698C1.54221 11.118 1.07226 10.4267 0.750216 9.66408C0.428174 8.90143 0.260425 8.08254 0.256657 7.25469C0.252889 6.42685 0.413177 5.60646 0.728263 4.84091C1.04335 4.07536 1.50699 3.37983 2.0924 2.79448C2.67782 2.20913 3.3734 1.74557 4.13899 1.43057C4.90457 1.11557 5.72498 0.955374 6.55282 0.959236C7.38067 0.963097 8.19955 1.13094 8.96216 1.45307C9.72477 1.7752 10.416 2.24523 10.9959 2.83601L12.1469 3.98801L13.2959 2.83601C13.8779 2.25399 14.5688 1.7923 15.3292 1.47728C16.0895 1.16227 16.9045 1.00011 17.7276 1.00007C18.5506 1.00002 19.3656 1.16209 20.126 1.47701C20.8865 1.79194 21.5774 2.25356 22.1594 2.83551C22.7414 3.41746 23.2031 4.10835 23.5182 4.86874C23.8332 5.62912 23.9953 6.4441 23.9954 7.26716C23.9954 8.09021 23.8334 8.90521 23.5184 9.66563C23.2035 10.426 22.7419 11.117 22.1599 11.699L12.8249 21.037C12.6458 21.2178 12.4024 21.3203 12.1479 21.322ZM6.56493 2.92201C5.70573 2.92255 4.86598 3.17782 4.15183 3.65554C3.43768 4.13327 2.8812 4.81199 2.55273 5.60593C2.22426 6.39986 2.13855 7.27336 2.30644 8.116C2.47432 8.95864 2.88826 9.73259 3.49593 10.34L12.1519 18.999L20.8089 10.34C21.6236 9.52502 22.0813 8.41985 22.0813 7.26751C22.0813 6.11517 21.6236 5.00999 20.8089 4.19501C19.9811 3.4049 18.8808 2.96405 17.7364 2.96405C16.5921 2.96405 15.4917 3.4049 14.6639 4.19501L12.8289 6.02201C12.6452 6.19542 12.4021 6.29202 12.1494 6.29202C11.8968 6.29202 11.6537 6.19542 11.4699 6.02201L9.63793 4.19001C9.23496 3.78601 8.75588 3.46592 8.22841 3.24828C7.70093 3.03063 7.13554 2.91973 6.56493 2.92201Z"
                fill="#585858"
              />
            </svg>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.619 2.53998C6.6146 2.54038 5.63286 2.83857 4.79791 3.39685C3.96296 3.95514 3.31228 4.74845 2.92814 5.67649C2.544 6.60453 2.44364 7.62563 2.63976 8.6107C2.83588 9.59577 3.31967 10.5006 4.02996 11.2107C4.74025 11.9209 5.64515 12.4045 6.63026 12.6004C7.61537 12.7963 8.63645 12.6958 9.56442 12.3115C10.4924 11.9271 11.2856 11.2763 11.8437 10.4412C12.4018 9.60618 12.6998 8.62439 12.7 7.61998C12.7001 6.95275 12.5688 6.29202 12.3135 5.67556C12.0582 5.05911 11.6839 4.49899 11.212 4.02723C10.7402 3.55547 10.18 3.18131 9.5635 2.92612C8.94699 2.67093 8.28624 2.53972 7.619 2.53998ZM4.91084e-07 7.61998C-2.91891e-05 6.42095 0.282931 5.23885 0.82587 4.16979C1.36881 3.10073 2.1564 2.17491 3.12459 1.46761C4.09278 0.760305 5.21424 0.291497 6.39776 0.0993066C7.58129 -0.0928841 8.79346 -0.00303116 9.93572 0.361558C11.078 0.726148 12.118 1.35518 12.9714 2.1975C13.8247 3.03982 14.4672 4.07165 14.8466 5.20907C15.2259 6.3465 15.3315 7.55741 15.1547 8.74333C14.9779 9.92925 14.5237 11.0567 13.829 12.034L19.946 18.151C20.0642 18.2692 20.1579 18.4095 20.2219 18.5639C20.2859 18.7183 20.3188 18.8838 20.3188 19.051C20.3188 19.2181 20.2859 19.3836 20.2219 19.5381C20.1579 19.6925 20.0642 19.8328 19.946 19.951C19.8278 20.0692 19.6875 20.1629 19.5331 20.2269C19.3787 20.2909 19.2131 20.3238 19.046 20.3238C18.8789 20.3238 18.7133 20.2909 18.5589 20.2269C18.4045 20.1629 18.2642 20.0692 18.146 19.951L12.03 13.835C10.8899 14.6445 9.54894 15.1247 8.15409 15.2229C6.75924 15.3211 5.36426 15.0336 4.12195 14.3918C2.87964 13.7499 1.83791 12.7786 1.11086 11.5842C0.383817 10.3898 -0.000501471 9.01829 4.91084e-07 7.61998Z"
                fill="#585858"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full shadow-sm shadow-gray-200">
        <div className="p-5 flex flex-col items-center justify-center">
          <div className="w-32">
            <ProfilePic img="p-7.jpg" />
          </div>
          <h1 className="text-xl font-semibold mt-3">Tom Cruise</h1>
          <p className="text-gray-500 text-sm">@tomecruise</p>
        </div>
      </div>
    </>
  );
};
