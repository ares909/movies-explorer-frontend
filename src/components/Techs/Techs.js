function Techs() {
  return (
    <section className='Techs'>
      <div className='techs__header'>
        <h2 className='techs__header-text'>Технологии</h2>
      </div>
      <div className='techs__body'>
        <div className='techs__body-containter'>
          <h3 className='techs__body-text-header'>7 Технологий</h3>
          <p className='techs__body-text'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className='techs__list'>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>HTML</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>CSS</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>JS</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>React</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>Git</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>Express.js</p>
          </li>
          <li className='techs__list-item'>
            <p className='techs__list-item-text'>mongoDB</p>
          </li>
        </ul>
        {/* <div className='tech__list'>
          <p className='tech__list-item'></p>
          <p className='aboutProject__progress-bar-text'>4 недели</p>
        </div> */}
      </div>
    </section>
  );
}

export default Techs;
