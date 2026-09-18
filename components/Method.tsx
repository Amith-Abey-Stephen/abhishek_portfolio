"use client";

function Cta({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <a
      href="#cta"
      className="cta-white sm"
      onClick={(e) => {
        e.preventDefault();
        onOpenModal();
      }}
    >
      Prendre rendez-vous
    </a>
  );
}

function Bar({ active }: { active: number }) {
  const tabs = ["◉ Google Meet", "Notion", "Frame.io", "▶ YouTube"];
  return (
    <div className="b-bar">
      <i className="d r" />
      <i className="d y" />
      <i className="d g" />
      <span className="b-tabs">
        {tabs.map((t, i) => (
          <b key={t} className={i === active ? "on" : ""}>
            {t}
          </b>
        ))}
      </span>
    </div>
  );
}

export default function Method({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="method" id="methode">
      <h2 className="sec-h left">
        Grâce à une méthode
        <br />
        <em>en 4 étapes…</em>
      </h2>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Jour<small>1</small>
          </div>
          <h3>On se rencontre</h3>
          <p>
            Un appel en visioconférence pour comprendre votre projet et préparer
            votre prochaine vidéo.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={0} />
          <div className="b-body meet">
            <img
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="meet-ctl">
              <span>◀</span>
              <span className="big">▶</span>
              <span>▶|</span>
            </div>
            <div className="meet-names">
              <span>Jean-Baptiste Rogé</span>
              <span>Pierre - AcmeLabs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Jour<small>2</small>
          </div>
          <h3>Le projet démarre</h3>
          <p>Suivez l&apos;avancement du projet sur votre portail client.</p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={1} />
          <div className="b-body notion">
            <div className="n-title">🌐 HUB - AcmeLabs x Pilea</div>
            <div className="n-table">
              <div className="n-th">
                <span>STATUS</span>
                <span>PROJET</span>
                <span>FICHIERS BRUTS</span>
                <span>LIVRABLES</span>
                <span>TÂCHES</span>
              </div>
              <div className="n-tr">
                <span className="st blue">In Progress</span>
                <span>202308YTB_GptVision</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Faire les retours sur Frame</span>
              </div>
              <div className="n-tr">
                <span className="st orange">Potential</span>
                <span>20241ADS_StoriesInsta</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Écrire des concepts d&apos;ads</span>
              </div>
              <div className="n-tr">
                <span className="st green">Success</span>
                <span>20230930VSL_OldHomepage</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Monter la VSL ☐ Compresser la VSL</span>
              </div>
            </div>
            <div className="n-kanban">
              <div className="kcol">
                <b>● Idée 6</b>
                <i>Comment produire plus de vidéos en moins de temps</i>
                <i>Que faire quand on a perdu les fichiers d&apos;une carte sd ?</i>
              </div>
              <div className="kcol">
                <b>● À tourner 2</b>
                <i>Comment incarner sa marque sans se bloquer…</i>
              </div>
              <div className="kcol">
                <b>● À produire 3</b>
                <i>Je veux garder mon indépendance de créateur…</i>
              </div>
              <div className="kcol">
                <b>● En production 1</b>
                <i>Si j&apos;avais un studio dans mes bureaux…</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Jour<small>4</small>
          </div>
          <h3>La vidéo avance</h3>
          <p>
            Si besoin, vous pourrez faire vos retours sur la vidéo en 1 minute
            grâce à une interface intuitive.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={2} />
          <div className="b-body frame">
            <div className="f-file">
              ‹ YTB_ACME-AirFryer.mp4 <span>Approved Share</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="f-comments">
              <div>
                <b>Pierre - Acme Labs 02:06</b>
                <p>Possible d&apos;ajouter des sous-titres ?</p>
              </div>
              <div>
                <b>Pierre - Acme Labs 04:21</b>
                <p>C&apos;est parfait ! J&apos;adore l&apos;idée</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Jour<small>10</small>
          </div>
          <h3>La vidéo est prête</h3>
          <p>
            Récupérez votre vidéo en haute qualité et au bon format et préparez
            vous à la diffuser.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={3} />
          <div className="b-body yt">
            <div className="yt-head">
              ▶ YouTube <span>Rechercher 🔍</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="yt-bar">
              <i />
            </div>
            <div className="yt-title">
              Le air fryer le plus cher est-il vraiment le plus efficace ?
              <br />
              <small>
                AcmeLabs 1.23M subscribers • 244K views - 6 months ago • 6.7K 👍
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
