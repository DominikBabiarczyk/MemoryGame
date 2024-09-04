import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from 'next-i18next';

const Welcome = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const nextPage = () => {
    router.push("/welcom/Rules");
  }

  return (

    
    <div className="min-h-screen bg-extendedColors-background-main flex flex-col ">

      {/* Pierwszy element wyśrodkowany */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <img src='/images/logo.png' 
          className="w-50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain"/>
      </div>

      {/* Dwa kolejne elementy na dole */}
      <div className="flex flex-col items-center pb-10 space-y-4">
          <button
            onClick={nextPage}
            className="font-menuOptions800 bg-colors-main-content hover:bg-colors-main-hover text-white  py-4 px-4 rounded-full w-64"
            >
              {t("btn.continue")}
          </button>
      </div>
    </div>
  );  
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["auth", "common"])),
    },
  };
}

export default Welcome;
