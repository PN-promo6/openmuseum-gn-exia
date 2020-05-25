import { Input } from '@angular/core';

export class Museum {
    @Input() opening: string;
    @Input() name: string;
    @Input() night_time: string;
    @Input() city: string;
    @Input() cp: string;
    @Input() fax: string;
    @Input() annual_closure: string;
    @Input() telephone: string;
    @Input() address: string;
    @Input() website: string;
}
