import React from 'react';

class Promo extends React.Component {
  constructor () {
    super();

    this.state = {
      chief: ''
    };
  }

  componentDidMount () {
    const studentsPromo = this.props.promo.students;
    let chiefPromo = null;
    this.props.chiefs.forEach(function (chief) {
      if (studentsPromo.includes(parseInt(chief.id, 10))) {
        chiefPromo = chief;
      }
    });
    this.setState({
      chief: chiefPromo
    });
  }

  render () {
    if (this.state.chief != null) {
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
              <img src={this.state.chief.avatar}/>
              <div className="content-side">
                <p>
                  Délégué : {this.state.chief.first_name}
                  {this.state.chief.last_name}
                  AKA {this.state.chief.username}
                </p>
                <a href="#">Voir la classe</a>
              </div>
            </div>
          </article>
        </li>
      );
    } else {
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
              <img src="https://fakeimg.pl/250x100/" />
              <div className="content-side">
                <p>
                  Pas de délégué
                </p>
                <a href="#">Voir la classe</a>
              </div>
            </div>
          </article>
        </li>
      );
    }
  }
}

class PromoList extends React.Component {
  render () {
    var listClass = this.props.promos.map(promo => <Promo promo={promo} key={promo.id} chiefs={this.props.chiefs}/>);

    return (<ol className="grid-3">
      {listClass}
    </ol>);
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
            L’ECV Digital a été créée afin de combler les besoins du marché de l’emploi qui manque cruellement de profils web pour accompagner la transformation digitale de toutes les entreprises et de l’économie en général.
            Située à Paris, Nantes, Bordeaux et Aix-en-Provence, l’ECV Digital, l’école du numérique et du Web, forme à tous les métiers du digital.
            Issue du groupe ECV (École de Communication Visuelle), l’école se positionne comme une école généraliste du secteur internet. Son objectif est de former des profils polyvalents intégrant les compétences techniques, créatives et marketing.
          </p>
        </section>
        <section>
          <header>
            <h2>Voici la liste des classes</h2>
          </header>
          <PromoList promos={this.props.promos} chiefs={this.props.chiefs}/>
        </section>
      </div>
    );
  }
}
