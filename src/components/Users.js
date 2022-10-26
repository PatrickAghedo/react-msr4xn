import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import '../style.css';

export default function Users() {
  const [currentItem, setCurrentItem] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const listUsers = [
      {
        first: 'Sylvan',
        last: 'Runolfsson',
        email: 'Sylvan.Runolfsson@kellie.org',
        address: '1296 Brandon Overpass',
        created: 'May 24, 2022',
        balance: '$3,663.22',
      },
      {
        first: 'Lilyan',
        last: 'White',
        email: 'Lilyan.White@mortimer.net',
        address: '00544 Koepp Ways',
        created: 'January 18, 2020',
        balance: '$2,172.82',
      },
      {
        first: 'Amani',
        last: 'Haag',
        email: 'cyansquirrel50@gmail.com',
        address: '99806 McClure Walk',
        created: 'January 23, 2013',
        balance: '$3,873.71',
      },
      {
        first: 'Noel',
        last: 'Prohaska',
        email: 'Noel.Prohaska@geovanny.com',
        address: "29337 O'Connell Trail",
        created: 'June 26, 2015',
        balance: '$8,506.76',
      },
      {
        first: 'Vivienne',
        last: 'Frami',
        email: 'Vivienne.Frami@hayley.org',
        address: '6750 Heaney Haven',
        created: 'May 2, 2021',
        balance: '$4,539.52',
      },
      {
        first: 'Antoinette',
        last: 'Lemke',
        email: 'Antoinette.Lemke@susanna.info',
        address: '471 Jessie Mountains',
        created: 'April 12, 2014',
        balance: '$2,029.91',
      },
      {
        first: 'Boyd',
        last: 'Hilpert',
        email: 'magentaturtle52@gmail.com',
        address: '2703 Keyon Island',
        created: 'August 16, 2021',
        balance: '$9,690.85',
      },
      {
        first: 'Howard',
        last: 'Considine',
        email: 'salmonturtle72@gmail.com',
        address: '4407 Lang Path',
        created: 'March 22, 2021',
        balance: '$7,487.31',
      },
      {
        first: 'Felix',
        last: 'Hand',
        email: 'Felix.Hand@anissa.org',
        address: '57630 Enrico Islands',
        created: 'September 12, 2015',
        balance: '$8,365.37',
      },
      {
        first: 'Elroy',
        last: 'Purdy',
        email: 'Elroy.Purdy@ernesto.biz',
        address: '4193 Spencer Creek',
        created: 'February 11, 2018',
        balance: '$3,079.52',
      },
      {
        first: 'Maverick',
        last: 'Waters',
        email: 'ivoryturtle25@gmail.com',
        address: '5855 Kutch Islands',
        created: 'January 16, 2013',
        balance: '$9,270.53',
      },
      {
        first: 'Kamren',
        last: 'Stiedemann',
        email: 'Kamren.Stiedemann@gail.net',
        address: '95334 Pagac Overpass',
        created: 'August 31, 2021',
        balance: '$2,654.89',
      },
      {
        first: 'Edmond',
        last: 'Jerde',
        email: 'magentaturtle73@gmail.com',
        address: '48285 Cletus Park',
        created: 'September 28, 2016',
        balance: '$7,773.15',
      },
      {
        first: 'Keeley',
        last: 'Rogahn',
        email: 'lavenderfrog32@gmail.com',
        address: '33958 Cruickshank Corner',
        created: 'August 12, 2019',
        balance: '$9,981.15',
      },
      {
        first: 'Salvador',
        last: 'Kris',
        email: 'violetgiraffe40@gmail.com',
        address: '05806 Wilber Mews',
        created: 'August 15, 2014',
        balance: '$8,831.25',
      },
      {
        first: 'Charlie',
        last: 'Rath',
        email: 'magentarabbit46@gmail.com',
        address: '8385 Schneider Hollow',
        created: 'August 31, 2013',
        balance: '$5,540.74',
      },
      {
        first: 'Talon',
        last: 'Schoen',
        email: 'goldfrog97@gmail.com',
        address: '01877 Greenholt Bypass',
        created: 'November 19, 2021',
        balance: '$925.89',
      },
      {
        first: 'Lempi',
        last: 'Haag',
        email: 'Lempi.Haag@alanna.org',
        address: '959 Alice Forge',
        created: 'July 10, 2022',
        balance: '$5,008.10',
      },
      {
        first: 'Amelie',
        last: 'Little',
        email: 'yellowwolf31@gmail.com',
        address: '81049 Lexie Hollow',
        created: 'August 10, 2014',
        balance: '$7,637.57',
      },
      {
        first: 'Kevin',
        last: 'Feest',
        email: 'Kevin.Feest@jose.biz',
        address: '558 Rebeka Center',
        created: 'November 17, 2021',
        balance: '$7,020.85',
      },
      {
        first: 'Jeremie',
        last: 'Huels',
        email: 'Jeremie.Huels@mariano.net',
        address: '233 Matilde Bridge',
        created: 'June 2, 2021',
        balance: '$7,705.21',
      },
      {
        first: 'Fidel',
        last: 'Schinner',
        email: 'Fidel.Schinner@kristoffer.net',
        address: '6798 Megane Ford',
        created: 'November 9, 2014',
        balance: '$664.17',
      },
      {
        first: 'Selena',
        last: 'Sporer',
        email: 'Selena.Sporer@chloe.biz',
        address: '4314 Lou Fort',
        created: 'March 4, 2015',
        balance: '$3,837.65',
      },
      {
        first: 'Art',
        last: 'Lemke',
        email: 'Art.Lemke@verda.biz',
        address: '30494 Carissa Dam',
        created: 'December 15, 2016',
        balance: '$6,868.70',
      },
      {
        first: 'Vivienne',
        last: 'Reichert',
        email: 'skybluerabbit37@gmail.com',
        address: '102 Marilie Corners',
        created: 'March 4, 2022',
        balance: '$3,908.93',
      },
      {
        first: 'Kayli',
        last: 'Weber',
        email: 'Kayli.Weber@rosamond.name',
        address: '95132 Von Ville',
        created: 'May 25, 2015',
        balance: '$5,941.67',
      },
      {
        first: 'Brionna',
        last: 'White',
        email: 'Brionna.White@lucious.info',
        address: '919 Oliver Islands',
        created: 'January 23, 2014',
        balance: '$8,517.63',
      },
      {
        first: 'Ashlynn',
        last: 'Cremin',
        email: 'greenwolf54@gmail.com',
        address: '110 Eino Gardens',
        created: 'April 29, 2017',
        balance: '$1,409.71',
      },
      {
        first: 'Brisa',
        last: 'Waters',
        email: 'Brisa.Waters@christine.name',
        address: '40229 Maribel Street',
        created: 'November 28, 2017',
        balance: '$8,426.52',
      },
      {
        first: 'Benedict',
        last: 'Baumbach',
        email: 'Benedict.Baumbach@jazmin.info',
        address: '45705 Miracle Mall',
        created: 'December 12, 2018',
        balance: '$2,655.54',
      },
      {
        first: 'Uriah',
        last: 'Kautzer',
        email: 'Uriah.Kautzer@myrtie.name',
        address: '47980 Bayer Fords',
        created: 'November 17, 2020',
        balance: '$596.70',
      },
      {
        first: 'Lizeth',
        last: 'Koepp',
        email: 'redsquirrel30@gmail.com',
        address: '11926 Maud Grove',
        created: 'August 19, 2021',
        balance: '$5,892.62',
      },
      {
        first: 'Evangeline',
        last: 'Feeney',
        email: 'Evangeline.Feeney@jada.biz',
        address: '4312 Meggie Forge',
        created: 'August 23, 2020',
        balance: '$3,079.51',
      },
      {
        first: 'Sharon',
        last: 'Macejkovic',
        email: 'blueturtle08@gmail.com',
        address: '653 Lavina Port',
        created: 'June 20, 2019',
        balance: '$1,601.78',
      },
      {
        first: 'Otto',
        last: 'Greenholt',
        email: 'Otto.Greenholt@ardella.net',
        address: '28480 Shanahan Underpass',
        created: 'October 5, 2020',
        balance: '$1,733.67',
      },
      {
        first: 'Carleton',
        last: 'Kuhic',
        email: 'Carleton.Kuhic@yesenia.org',
        address: '427 Ruthe Field',
        created: 'November 4, 2014',
        balance: '$7,472.75',
      },
      {
        first: 'Anita',
        last: 'Schmidt',
        email: 'Anita.Schmidt@emmie.com',
        address: '90388 Adrien Glen',
        created: 'August 13, 2015',
        balance: '$725.50',
      },
      {
        first: 'Fredrick',
        last: 'Yost',
        email: 'whiterabbit99@gmail.com',
        address: '24840 Katarina Track',
        created: 'June 29, 2021',
        balance: '$179.55',
      },
      {
        first: 'Wilhelm',
        last: 'Runte',
        email: 'Wilhelm.Runte@jeramy.com',
        address: '259 Clifford Throughway',
        created: 'June 20, 2013',
        balance: '$8,866.86',
      },
      {
        first: 'Frieda',
        last: 'Dickens',
        email: 'yellowturtle89@gmail.com',
        address: '355 Donnelly Views',
        created: 'April 3, 2016',
        balance: '$6,148.29',
      },
      {
        first: 'Rosendo',
        last: 'Bahringer',
        email: 'Rosendo.Bahringer@athena.net',
        address: '8201 Waters Plain',
        created: 'May 29, 2015',
        balance: '$4,818.53',
      },
      {
        first: 'Alex',
        last: 'Pollich',
        email: 'Alex.Pollich@cristal.com',
        address: '991 Franecki Road',
        created: 'April 11, 2018',
        balance: '$310.12',
      },
      {
        first: 'Dallin',
        last: 'Emard',
        email: 'orangewolf01@gmail.com',
        address: '31208 Predovic Valley',
        created: 'January 8, 2016',
        balance: '$6,046.40',
      },
      {
        first: 'Maxie',
        last: 'Hammes',
        email: 'Maxie.Hammes@jarod.info',
        address: '9051 Hoppe Brooks',
        created: 'February 10, 2022',
        balance: '$3,893.19',
      },
      {
        first: 'Danial',
        last: 'Weissnat',
        email: 'Danial.Weissnat@eve.com',
        address: '3817 Reynolds Ford',
        created: 'May 9, 2013',
        balance: '$6,091.61',
      },
      {
        first: 'Norberto',
        last: 'Hauck',
        email: 'greenturtle21@gmail.com',
        address: '268 Rice Turnpike',
        created: 'June 3, 2018',
        balance: '$6,851.23',
      },
      {
        first: 'Dion',
        last: 'Fadel',
        email: 'mintgreenrabbit95@gmail.com',
        address: '273 Streich Ford',
        created: 'June 8, 2018',
        balance: '$6,212.95',
      },
      {
        first: 'Johnpaul',
        last: 'Auer',
        email: 'skybluefrog66@gmail.com',
        address: '163 Pfeffer Islands',
        created: 'September 17, 2019',
        balance: '$7,215.21',
      },
      {
        first: 'Antonietta',
        last: 'Beatty',
        email: 'goldsquirrel51@gmail.com',
        address: '746 Zoey Islands',
        created: 'July 28, 2017',
        balance: '$8,416.16',
      },
      {
        first: 'Zack',
        last: 'Kutch',
        email: 'Zack.Kutch@joel.biz',
        address: '24632 Nola Terrace',
        created: 'September 17, 2017',
        balance: '$8,118.55',
      },
      {
        first: 'Noel',
        last: 'Harber',
        email: 'olivefrog12@gmail.com',
        address: '3907 Kraig Road',
        created: 'April 10, 2022',
        balance: '$8,024.76',
      },
      {
        first: 'Deshaun',
        last: 'Macejkovic',
        email: 'Deshaun.Macejkovic@kenny.net',
        address: '4149 Hayes Overpass',
        created: 'January 27, 2013',
        balance: '$1,316.78',
      },
      {
        first: 'Jevon',
        last: 'Schuppe',
        email: 'ivoryturtle83@gmail.com',
        address: '72062 Haag Summit',
        created: 'April 16, 2017',
        balance: '$4,666.69',
      },
      {
        first: 'Tyshawn',
        last: 'Nikolaus',
        email: 'redsquirrel50@gmail.com',
        address: '436 Sadie Trail',
        created: 'May 10, 2018',
        balance: '$8,663.95',
      },
      {
        first: 'Tyrique',
        last: 'Runte',
        email: 'redrabbit25@gmail.com',
        address: '71650 Lamont Bridge',
        created: 'January 26, 2016',
        balance: '$9,571.84',
      },
      {
        first: 'Baron',
        last: 'Reichel',
        email: 'lavenderfrog22@gmail.com',
        address: '882 Donnelly Forge',
        created: 'January 20, 2015',
        balance: '$2,950.91',
      },
      {
        first: 'Dasia',
        last: 'Blanda',
        email: 'Dasia.Blanda@jessica.name',
        address: '366 Constantin Squares',
        created: 'December 14, 2015',
        balance: '$6,035.26',
      },
      {
        first: 'Eula',
        last: 'Dach',
        email: 'skybluewolf93@gmail.com',
        address: '2835 Batz Branch',
        created: 'January 5, 2019',
        balance: '$9,241.71',
      },
      {
        first: 'Kendra',
        last: 'Reynolds',
        email: 'Kendra.Reynolds@rafael.name',
        address: '2929 Bell Crossroad',
        created: 'April 18, 2018',
        balance: '$9,892.89',
      },
      {
        first: 'Tyrese',
        last: 'Schowalter',
        email: 'Tyrese.Schowalter@armand.biz',
        address: '0283 Lonny Glens',
        created: 'February 13, 2017',
        balance: '$6,807.28',
      },
      {
        first: 'Darrin',
        last: 'Gulgowski',
        email: 'Darrin.Gulgowski@isai.org',
        address: '6115 Mollie Orchard',
        created: 'October 4, 2016',
        balance: '$8,733.36',
      },
      {
        first: 'Aaron',
        last: 'Graham',
        email: 'maroonturtle12@gmail.com',
        address: '315 Griffin Meadow',
        created: 'September 19, 2016',
        balance: '$9,550.45',
      },
      {
        first: 'Samantha',
        last: 'Hand',
        email: 'Samantha.Hand@chris.net',
        address: '1715 Kuhlman Square',
        created: 'January 25, 2015',
        balance: '$4,688.32',
      },
      {
        first: 'Adelle',
        last: 'Prohaska',
        email: 'Adelle.Prohaska@idell.info',
        address: '227 Kuhlman Summit',
        created: 'August 25, 2013',
        balance: '$4,935.78',
      },
      {
        first: 'Verdie',
        last: 'Rohan',
        email: 'Verdie.Rohan@jess.org',
        address: '879 Ullrich Gardens',
        created: 'March 12, 2014',
        balance: '$7,964.97',
      },
      {
        first: 'Cristobal',
        last: 'Dicki',
        email: 'maroongiraffe26@gmail.com',
        address: '716 Schaden Expressway',
        created: 'May 21, 2016',
        balance: '$3,218.87',
      },
      {
        first: 'Aida',
        last: 'Connelly',
        email: 'Aida.Connelly@isom.net',
        address: '8452 Kathleen Port',
        created: 'July 20, 2016',
        balance: '$5,632.62',
      },
      {
        first: 'Gus',
        last: 'Zemlak',
        email: 'redsquirrel59@gmail.com',
        address: '304 Homenick Keys',
        created: 'January 5, 2019',
        balance: '$7,665.07',
      },
      {
        first: 'Robyn',
        last: 'Lindgren',
        email: 'bluerabbit60@gmail.com',
        address: '0512 Mekhi Forest',
        created: 'April 24, 2013',
        balance: '$680.01',
      },
      {
        first: 'Adrienne',
        last: 'Hyatt',
        email: 'blackwolf58@gmail.com',
        address: '588 Toy Expressway',
        created: 'September 15, 2017',
        balance: '$5,288.47',
      },
      {
        first: 'Coty',
        last: 'Sauer',
        email: 'skybluefrog66@gmail.com',
        address: '820 Weldon Wall',
        created: 'May 30, 2013',
        balance: '$2,934.75',
      },
      {
        first: 'Chadrick',
        last: 'Christiansen',
        email: 'lavenderfrog33@gmail.com',
        address: '565 Kohler Stravenue',
        created: 'September 23, 2018',
        balance: '$2,058.21',
      },
      {
        first: 'Lukas',
        last: 'Mayert',
        email: 'Lukas.Mayert@clarissa.com',
        address: '088 Millie Row',
        created: 'March 28, 2020',
        balance: '$655.96',
      },
      {
        first: 'Pablo',
        last: 'Farrell',
        email: 'fuchsiaturtle18@gmail.com',
        address: '8214 Virgie Fort',
        created: 'May 23, 2020',
        balance: '$9,256.16',
      },
      {
        first: 'Pete',
        last: 'Frami',
        email: 'Pete.Frami@destiney.com',
        address: '21598 Leffler Port',
        created: 'January 21, 2017',
        balance: '$3,793.66',
      },
    ];

    const item = listUsers[currentItem];
    setListItems(listUsers);
    setNews(item);
    setLoading(false);
  }, [currentItem]);

  const handleNext = (event) => {
    event.preventDefault();
    const length = listItems.length;
    const count = length - 1;
    if (currentItem < count) {
      setCurrentItem(currentItem + 1);
    } else {
      setCurrentItem(0);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    if (currentItem > 0) {
      setCurrentItem((prev) => prev - 1);
    } else {
      setCurrentItem(0);
    }
  };

  return (
    <section className="users-container">
      <h1>Users</h1>
      <p>This is the Users Page</p>
      <Navigation />
      <section className="news">
        {loading ? (
          <div>loading</div>
        ) : (
          <div
            className="news-item"
            // key={item.id}
          >
            <p> First_Name: {news.first}</p>
            <p>Last_Name: {news.last}</p>
            <p>Email_Address: {news.email}</p>
            <p>Address: {news.address}</p>
            <p>Created: {news.created}</p>
            <p>Balance: {news.balance}</p>
          </div>
        )}
      </section>
      <div className="paginate">
        <button className="prev" onClick={handlePrevious}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}
