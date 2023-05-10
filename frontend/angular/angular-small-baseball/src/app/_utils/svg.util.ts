import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const avatars = ['man', 'lily', 'sugar', 'jenny', 'boy'];
export const loadSvgResoures = (ir: MatIconRegistry, ds: DomSanitizer) => {
    avatars.forEach(avatar => {
        const url = `assets/portraits/${avatar}.svg`;
        ir.addSvgIcon(avatar, ds.bypassSecurityTrustResourceUrl(url));
    });
};
