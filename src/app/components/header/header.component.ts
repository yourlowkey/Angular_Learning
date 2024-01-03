import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
// import { DomSanitizer } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule]
})
export class HeaderComponent {
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   // Note that we provide the icon here as a string literal here due to a limitation in
  //   // Stackblitz. If you want to provide the icon from a URL, you can use:
  //   // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
  //   iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  // }
}
