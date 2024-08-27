import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'RAJ' };
return (
    <section className="home">
    <div className="home-content">
    <header className="home-header">
    <HeaderBox type="greeting" title="WELCOME" user={loggedIn?.firstName || 'Guest'}
    subtext="Access and manage your account and transactions efficiently"/>
    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={12500.350} />
    </header>
    </div>
    </section>
)
}

export default Home;
