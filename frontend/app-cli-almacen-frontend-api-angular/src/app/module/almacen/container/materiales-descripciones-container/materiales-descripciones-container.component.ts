/*
 * @fileoverview    {MaterialesDescripcionesContainerComponent}
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
import { MaterialesDescripcionesViewModel } from '../../model/materiales-descripciones.model';
import { MaterialesDescripcionesFacade } from '../../facade/materiales-descripciones.facade';

/**
 * TODO: Description of {@code MaterialesDescripcionesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-descripciones-container',
    templateUrl: './materiales-descripciones-container.component.html',
    standalone: false,
    styleUrls: ['./materiales-descripciones-container.component.css']
})
export class MaterialesDescripcionesContainerComponent extends GenericContainerComponent<MaterialesDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesDescripcionesViewModel,
        entityFacade: MaterialesDescripcionesFacade) {
        super(entityInstance, entityFacade);
    }

}
