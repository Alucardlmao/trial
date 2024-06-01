import BusinessHeader from '@/components/common/Business-header';
import Sidebar from '@/components/business_panel/sidebar/page';

const RootLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-12 h-screen  ">
            <div className="col-span-3  border border-[#E8E8E8] bg-gradient-to-b from-[#EAF5DF] to-[#F2EFDE] ">
                <nav>
                    <Sidebar />
                </nav>
            </div>
            <div className="col-span-9 bg-[#FAFAFA]">
                <BusinessHeader />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
