/*
 * @overview        {MmTmcdDescripcionesContainerComponent}
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
import { MmTmcdDescripcionesViewModel } from '../../model/mm-tmcd-descripciones.model';
import { MmTmcdDescripcionesFacade } from '../../facade/mm-tmcd-descripciones.facade';

/**
 * TODO: Description of {@code MmTmcdDescripcionesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mm-tmcd-descripciones-container',
    templateUrl: './mm-tmcd-descripciones-container.component.html',
    standalone: false,
    styleUrls: ['./mm-tmcd-descripciones-container.component.css']
})
export class MmTmcdDescripcionesContainerComponent extends GenericContainerComponent<MmTmcdDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MmTmcdDescripcionesViewModel,
        entityFacade: MmTmcdDescripcionesFacade) {
        super(entityInstance, entityFacade);
    }

}
