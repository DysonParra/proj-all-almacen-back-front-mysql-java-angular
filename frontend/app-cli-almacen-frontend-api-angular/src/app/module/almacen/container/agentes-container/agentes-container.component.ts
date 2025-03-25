/*
 * @fileoverview    {AgentesContainerComponent}
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
import { AgentesViewModel } from '../../model/agentes.model';
import { AgentesFacade } from '../../facade/agentes.facade';

/**
 * TODO: Description of {@code AgentesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-agentes-container',
    templateUrl: './agentes-container.component.html',
    standalone: false,
    styleUrls: ['./agentes-container.component.css']
})
export class AgentesContainerComponent extends GenericContainerComponent<AgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AgentesViewModel,
        entityFacade: AgentesFacade) {
        super(entityInstance, entityFacade);
    }

}
