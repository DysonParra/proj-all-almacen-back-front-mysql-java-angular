/*
 * @fileoverview    {TiposAgentesContainerComponent}
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
import { TiposAgentesViewModel } from '../../model/tipos-agentes.model';
import { TiposAgentesFacade } from '../../facade/tipos-agentes.facade';

/**
 * TODO: Description of {@code TiposAgentesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-agentes-container',
    templateUrl: './tipos-agentes-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-agentes-container.component.css']
})
export class TiposAgentesContainerComponent extends GenericContainerComponent<TiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposAgentesViewModel,
        entityFacade: TiposAgentesFacade) {
        super(entityInstance, entityFacade);
    }

}
