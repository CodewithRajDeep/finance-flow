import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'RAJ', lastName: 'DEEP', email: 'contactraj@gmail.com' };
return (
    <section className="home">
    <div className="home-content">
    <header className="home-header">
    <HeaderBox type="greeting" title="WELCOME" user={loggedIn?.firstName || 'Guest'}
    subtext="Access and manage your account and transactions efficiently"/>
    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={12500.350} />
    </header>
    RECENT TRANSACTIONS
    </div>
    <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 12350.350}, {currentBalance: 500.760}]}/>
    </section>
)
}

export default Home;
