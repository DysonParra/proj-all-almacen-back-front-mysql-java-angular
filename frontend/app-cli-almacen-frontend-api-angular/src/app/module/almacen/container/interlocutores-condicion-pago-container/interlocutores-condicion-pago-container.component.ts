/*
 * @fileoverview    {InterlocutoresCondicionPagoContainerComponent}
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
import { InterlocutoresCondicionPagoViewModel } from '../../model/interlocutores-condicion-pago.model';
import { InterlocutoresCondicionPagoFacade } from '../../facade/interlocutores-condicion-pago.facade';

/**
 * TODO: Description of {@code InterlocutoresCondicionPagoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-interlocutores-condicion-pago-container',
    templateUrl: './interlocutores-condicion-pago-container.component.html',
    standalone: false,
    styleUrls: ['./interlocutores-condicion-pago-container.component.css']
})
export class InterlocutoresCondicionPagoContainerComponent extends GenericContainerComponent<InterlocutoresCondicionPagoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: InterlocutoresCondicionPagoViewModel,
        entityFacade: InterlocutoresCondicionPagoFacade) {
        super(entityInstance, entityFacade);
    }

}
