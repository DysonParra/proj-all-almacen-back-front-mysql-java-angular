/*
 * @fileoverview    {ZonasComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { ZonasViewModel } from '../../model/zonas.model';

/**
 * TODO: Description of {@code ZonasComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-zonas',
    templateUrl: './zonas.component.html',
    standalone: false,
    styleUrls: ['./zonas.component.css']
})
export class ZonasComponent extends GenericComponent<ZonasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ZonasViewModel) {
        super(entityInstance);
    }

}
