/*
 * @fileoverview    {LocalizacionesComponent}
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
import { LocalizacionesViewModel } from '../../model/localizaciones.model';

/**
 * TODO: Description of {@code LocalizacionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-localizaciones',
    templateUrl: './localizaciones.component.html',
    standalone: false,
    styleUrls: ['./localizaciones.component.css']
})
export class LocalizacionesComponent extends GenericComponent<LocalizacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LocalizacionesViewModel) {
        super(entityInstance);
    }

}
