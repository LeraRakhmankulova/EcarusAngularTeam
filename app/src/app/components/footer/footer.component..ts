import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
// const Footer = () => {
//     return (
//         <footer className={styles.footer}>
//             <div className={styles.container}>
//                 <div className={styles.wrapper}>
//                     <div className={styles.mail}>
//                         <div className={styles.icon_wrapper}>
//                             <Icon name='mail' width='25' height='21' />
//                         </div>
//                         <p>info@ecorus.ru</p>
//                     </div>
//                     <div className={styles.phone}>
//                         <div className={styles.icon_wrapper}>
//                             <Icon name='phone' width='22' height='22' />
//                         </div>
//                         <p>+7 (800) 880-88-88</p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
//
// export default Footer;