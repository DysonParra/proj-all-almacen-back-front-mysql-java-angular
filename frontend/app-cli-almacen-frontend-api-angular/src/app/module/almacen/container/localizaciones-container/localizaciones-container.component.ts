/*
 * @fileoverview    {LocalizacionesContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { LocalizacionesViewModel } from '../../model/localizaciones.model';
import { LocalizacionesFacade } from '../../facade/localizaciones.facade';

/**
 * TODO: Description of {@code LocalizacionesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-localizaciones-container',
    templateUrl: './localizaciones-container.component.html',
    standalone: false,
    styleUrls: ['./localizaciones-container.component.css']
})
export class LocalizacionesContainerComponent extends GenericContainerComponent<LocalizacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LocalizacionesViewModel,
        entityFacade: LocalizacionesFacade) {
        super(entityInstance, entityFacade);
    }

}
