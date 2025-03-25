/*
 * @fileoverview    {MmTmcCaracteristicaContainerComponent}
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
import { MmTmcCaracteristicaViewModel } from '../../model/mm-tmc-caracteristica.model';
import { MmTmcCaracteristicaFacade } from '../../facade/mm-tmc-caracteristica.facade';

/**
 * TODO: Description of {@code MmTmcCaracteristicaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mm-tmc-caracteristica-container',
    templateUrl: './mm-tmc-caracteristica-container.component.html',
    standalone: false,
    styleUrls: ['./mm-tmc-caracteristica-container.component.css']
})
export class MmTmcCaracteristicaContainerComponent extends GenericContainerComponent<MmTmcCaracteristicaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MmTmcCaracteristicaViewModel,
        entityFacade: MmTmcCaracteristicaFacade) {
        super(entityInstance, entityFacade);
    }

}
