import React from 'react';

class Promo extends React.Component {
  render () {
    const chiefPresentation = this.props.chief ? (<p> Délégué : {this.props.chief.first_name}
      {this.props.chief.last_name} AKA {this.props.chief.username}</p>) : (<p>Pas de délégué</p>);
    const imgPromo = this.props.chief ? (<img src={this.props.chief.avatar} />) : (<img src="https://fakeimg.pl/250x100/" />);

    return (
      <li>
        <article>
          <header>
            <h3>
              {this.props.promo.degree}
              <span>
                {this.props.promo.year}
              </span>
            </h3>
          </header>
          <div className="promo-content">
            {imgPromo}
            <div className="content-side">
              {chiefPresentation}
              <button onClick={() => this.props.oneClass(this.props.promo, this.props.students)}>Voir la classe</button>
            </div>
          </div>
        </article>
      </li>
    );
  }
}

class PromoList extends React.Component {
  render () {
    const listClass = this.props.promos.map(promo =>
      (<Promo
        promo={promo}
        key={promo.id}
        oneClass={this.props.oneClass}
        students={this.props.students}
        chief={this.props.students.filter(student => student.id === promo.idChief)[0]}/>)
    );
    return (
      <ol className="grid-3">
        {listClass}
      </ol>
    );
  }
}

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <section>
          <header>
            <h2>L'ECV DIGITAL</h2>
          </header>
          <p>
            L’ECV Digital a été créée afin de combler les besoins du marché de l’emploi qui
            manque cruellement de profils web pour accompagner la transformation digitale
            de toutes les entreprises et de l’économie en général. Située à Paris, Nantes,
            Bordeaux et Aix-en-Provence, l’ECV Digital, l’école du numérique et du Web,
            forme à tous les métiers du digital. Issue du groupe ECV (École de Communication
              Visuelle), l’école se positionne comme une école généraliste du secteur internet.
             Son objectif est de former des profils polyvalents intégrant les
            compétences techniques, créatives et marketing.
          </p>
        </section>
        <section>
          <header>
            <h2>Voici la liste des classes</h2>
          </header>
          <PromoList promos={this.props.promos} students={this.props.students} oneClass={this.props.oneClass}/>
        </section>
      </div>
    );
  }
}
