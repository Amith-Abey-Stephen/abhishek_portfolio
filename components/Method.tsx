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
      Book a call
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
        A career in four stages
        <br />
        <em>from analysis to ownership.</em>
      </h2>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Step<small>1</small>
          </div>
          <h3>Content analysis</h3>
          <p>
            Started at Meta Algorithm Solutions learning audience behaviour,
            content quality — and why certain content works.
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
              <span>Abhishek.D</span>
              <span>Founder — KPH Podcast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Step<small>2</small>
          </div>
          <h3>Creative production</h3>
          <p>
            Moved into video editing and visual storytelling — documentary-style
            work, from concept through final delivery.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={1} />
          <div className="b-body notion">
            <div className="n-title">🌐 HUB - KPH Podcast x Abhishek.D</div>
            <div className="n-table">
              <div className="n-th">
                <span>STATUS</span>
                <span>PROJECT</span>
                <span>RAW FILES</span>
                <span>DELIVERABLES</span>
                <span>TASKS</span>
              </div>
              <div className="n-tr">
                <span className="st blue">In Progress</span>
                <span>KPH_Pod_Ep42_FullEdit</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Structure the full episode</span>
              </div>
              <div className="n-tr">
                <span className="st orange">Potential</span>
                <span>KPH_Shorts_Batch12</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Pick 6 short-form moments</span>
              </div>
              <div className="n-tr">
                <span className="st green">Success</span>
                <span>KPH_Ep41_YouTube</span>
                <span></span>
                <span>https://f.io/4m..</span>
                <span>☐ Final cut ☐ Upload to YouTube</span>
              </div>
            </div>
            <div className="n-kanban">
              <div className="kcol">
                <b>● Ideas 6</b>
                <i>One conversation → five outputs</i>
                <i>Hook options for the next Short</i>
              </div>
              <div className="kcol">
                <b>● To record 2</b>
                <i>Founder story: distribution…</i>
              </div>
              <div className="kcol">
                <b>● To edit 3</b>
                <i>Ep. 42 full cut…</i>
              </div>
              <div className="kcol">
                <b>● Publishing 1</b>
                <i>Ep. 41 on YouTube…</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Step<small>3</small>
          </div>
          <h3>Leadership</h3>
          <p>
            Video Editing Team Lead: coordinating workflows, quality and
            delivery — ownership that goes beyond the timeline.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={2} />
          <div className="b-body frame">
            <div className="f-file">
              ‹ KPH_Pod_Ep42_Full.mp4 <span>Approved Share</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="f-comments">
              <div>
                <b>Abhishek 02:06</b>
                <p>Possible to tighten this pause?</p>
              </div>
              <div>
                <b>Abhishek 04:21</b>
                <p>This story is the hook — keep it</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-l">
          <div className="jour">
            Step<small>4</small>
          </div>
          <h3>Content ownership</h3>
          <p>
            Today at Kerala Product Hunt: the full pipeline — long-form edits,
            repurposing, YouTube publishing and distribution.
          </p>
          <Cta onOpenModal={onOpenModal} />
        </div>
        <div className="browser">
          <Bar active={3} />
          <div className="b-body yt">
            <div className="yt-head">
              ▶ YouTube <span>Search 🔍</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="yt-bar">
              <i />
            </div>
            <div className="yt-title">
              How founders turn one conversation into content that travels
              <br />
              <small>
                KPH Podcast • New episode • Edited by Abhishek.D
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
