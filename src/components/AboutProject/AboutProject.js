function AboutProject() {
  return (
    <section className='AboutProject'>
      <div className='aboutProject__header'>
        <h2 className='aboutProject__header-text'>О проекте</h2>
      </div>
      <div className='aboutProject__body'>
        <div className='aboutProject__body-containter'>
          <div>
            <h3 className='aboutProject__body-text-header'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='aboutProject__body-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h3 className='aboutProject__body-text-header'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='aboutProject__body-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='aboutProject__progress-bar'>
          <p className='aboutProject__progress-bar-text'>1 неделя</p>
          <p className='aboutProject__progress-bar-text'>4 недели</p>
        </div>
        <div className='aboutProject__progress-bar aboutProject__progress-bar_tech'>
          <p className='aboutProject__progress-bar-text aboutProject__progress-bar-text_tech'>
            Back-end
          </p>
          <p className='aboutProject__progress-bar-text aboutProject__progress-bar-text_tech'>
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
