
import moment from 'moment'

function Info({data}) {

  const status = data.status;

  if (status === 200) {
    return <section className="markinfo__section">
    <div className="container">
      <div className="markinfo__header"></div>
      <ul className="markinfo__list">
        <li className="markinfo__item">
          <span className="markinfo__item-span">КИЗ:</span> {data.data.cis}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Агрегат:</span> {data.data.child}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">GTIN:</span> {data.data.gtin}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Наименование:</span> {data.data.productName}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Товарная группа:</span> {data.data.productGroup}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Статус:</span> {data.data.status}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Вид эмиссии:</span> {data.data.emissionType}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Дата эмисcии:</span> {typeof(data.data.emissionDate) === 'undefined' ? '-': moment(data.data.emissionDate).format('DD.MM.YYYY HH:mm:ss')}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Дата нанесения:</span> {typeof(data.data.applicationDate) === 'undefined' ? '-': moment(data.data.applicationDate).format('DD.MM.YYYY HH:mm:ss')}
        </li>
         <li className="markinfo__item">
          <span className="markinfo__item-span">Дата ввода в оборот:</span> {typeof(data.data.introducedDate) === 'undefined' ? '-': moment(data.data.introducedDate).format('DD.MM.YYYY HH:mm:ss')}
        </li>
      <li className="markinfo__item">
          <span className="markinfo__item-span">Срок годности:</span> {typeof(data.data.expirationDate) === 'undefined' ? '-': moment(data.data.expirationDate).format('DD.MM.YYYY HH:mm:ss')}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Товарная упаковка:</span> {data.data.generalPackageType}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Торговая марка:</span> {data.data.brand}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Код ТНВЭД:</span> {data.data.tnVedEaes}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">ИНН владельца:</span> {data.data.ownerInn}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Наименование владельца:</span> {data.data.ownerName}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">ИНН производителя:</span> {data.data.producerInn}
        </li>
        <li className="markinfo__item">
          <span className="markinfo__item-span">Наименование производителя:</span> {data.data.producerName}
        </li>
      </ul>
    </div>
  </section>  
  }

  if (status === 401) {
    return <p className="markinfo__error">Ошибка: {data.status}. {data.details} !</p>
  }

  if (status === 403) {
    return <p className="markinfo__error">Ошибка: {data.status}. {data.details} !</p>
  }

  if (status === 404) {
    return <p className="markinfo__error">Ошибка: {data.status}. {data.details} !</p>
  }

  if (status === 500) {
    return <p className="markinfo__error">Ошибка: {data.status}. {data.details} !</p>
  }

}

export default Info;