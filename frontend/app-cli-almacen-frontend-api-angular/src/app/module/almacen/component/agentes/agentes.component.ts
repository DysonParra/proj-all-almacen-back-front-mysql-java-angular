/*
 * @fileoverview    {AgentesComponent}
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
import { AgentesViewModel } from '../../model/agentes.model';

/**
 * TODO: Description of {@code AgentesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-agentes',
    templateUrl: './agentes.component.html',
    standalone: false,
    styleUrls: ['./agentes.component.css']
})
export class AgentesComponent extends GenericComponent<AgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AgentesViewModel) {
        super(entityInstance);
    }

}
