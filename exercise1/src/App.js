
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Notifications from './components/Notifications';
import SideSection from './components/SideSection';

function App() {
  return (
    <div >
      <Header/>
      <Notifications topic='PÄIVÄN TIMANTTI' body = 'Tutkija kertoo: Näin sota näkyy meissä edelleen' />
      <Notifications topic = 'PÄIVÄN TIMANTTI' body = 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisonsa 19 200 euroa'/>
      <Notifications topic = 'MAINOS' body = 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta'/>
      <MainSection otsikko = 'Koronavirus'/>

      < div className="toimi">
      <img src="/covid-19.jpg" alt=""/>
      
      <div className="container">
      <SideSection main = 'Luetuimmat'/>
      <SideSection num = '1  ' main=' Rikosepäilyt' text = '| EIT- huijaus. Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa'/>
      <SideSection num = '2  ' main =' HS Vantaa' text = '| Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa'/>
      <SideSection num = '3  ' main =' Päivittyvä seuranta' text = '| Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan valmisteiden riittävyyden'/>
      <SideSection num = '4  'main = ' Nyt.fi' text = '| Harry Styles  puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä mummon tilkkutäkkiä neulovat kymmenet tuhannet ympäru maailman - Soitimme vaatesuunnittelijalle'/>
      </div>
      </div>
      <MainSection redball = '* HS seuraa'/>
      <MainSection isoteksti = 'Päivittyvä seuranta |' MainSection pikkuteksti = ' STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan'/> 
      
      
    </div>

  );
}

export default App;
