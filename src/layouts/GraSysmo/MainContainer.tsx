import { useRouter } from 'next/router';
import BackArrow  from "@src/layouts/GraSysmo/BackArrow";


const LevelHard = ({ children }: { children: React.ReactNode }) => {


  return (
      <div className="flex items-center justify-center min-h-screen bg-extendedColors-background-main">
        <div className="bg-colors-main-content p-6 rounded-3xl shadow-lg max-w-sm text-center border-4 border-colors-white">
        {children}
        </div>
      </div>
  );  
};

export default LevelHard;