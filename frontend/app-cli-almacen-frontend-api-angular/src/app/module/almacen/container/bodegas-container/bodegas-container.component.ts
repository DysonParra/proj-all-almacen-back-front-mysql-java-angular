/*
 * @overview        {BodegasContainerComponent}
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
import { BodegasViewModel } from '../../model/bodegas.model';
import { BodegasFacade } from '../../facade/bodegas.facade';

/**
 * TODO: Description of {@code BodegasContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-bodegas-container',
    templateUrl: './bodegas-container.component.html',
    standalone: false,
    styleUrls: ['./bodegas-container.component.css']
})
export class BodegasContainerComponent extends GenericContainerComponent<BodegasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BodegasViewModel,
        entityFacade: BodegasFacade) {
        super(entityInstance, entityFacade);
    }

}
