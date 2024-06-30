const CounterAbout = () => {
  return (
    <section className="section-couter">
      <div className="container">
        <div className="main lg:py-20 sm:py-14 py-10 border-t border-outline">
          <div className="flex max-md:flex-col gap-y-6">
            <div className="md:w-1/2 pr-[45px]">
              <h4 className="heading4">Vårt Mål</h4>
              <div className="body2 mt-3">
                Vi är en annorlunda webbyrå med en tydlig målsättning: att förse
                våra kunder med tjänster av högsta kvalitet, där resultatet
                överträffar förväntningarna. Vi älskar att lyssna på våra
                kunders behov och idéer, samtidigt som vi gärna delar med oss av
                våra egna synpunkter från vår expertis. Vårt mål är att erbjuda
                våra kunder en snabb och smidig process från start till
                leverans. Att skapa en samarbetsmiljö där dina visioner blir
                verklighet, är något vi alltid strävar efter.
              </div>
            </div>
            <div className="md:w-1/2 md:pl-[45px]">
              <h4 className="heading4">Vår Vision</h4>
              <div className="body2 mt-3">
                TELT har stora visioner för hur vi kan bidra till att forma
                framtidens digitalisering. Vår ambition är att skapa innovativa
                lösningar som inte bara uppfyller utan överträffar våra kunders
                förväntningar. Vi värdesätter dialog och älskar att lyssna på
                våra kunders behov och idéer, samtidigt som vi aktivt delar med
                oss av våra egna erfarenheter. Vi strävar efter att bygga
                hållbara och framgångsrika samarbeten och relationer där varje
                projekt speglar vår passion för kvalitet och kreativitet.
              </div>
            </div>
          </div>
          <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 lg:mt-[60px] sm:mt-12 mt-8">
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">20</div>
              <div className="body1 mt-1">Years experiences</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="flex items-center">
                <div className="count-number heading3">1.8</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 mt-1">Happy customers</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">460</div>
              <div className="body1 mt-1">Project completed</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">15</div>
              <div className="body1 mt-1">Awards achievement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterAbout;
