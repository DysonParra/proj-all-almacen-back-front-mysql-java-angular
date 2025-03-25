/*
 * @fileoverview    {TiposAgentesComponent}
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
import { TiposAgentesViewModel } from '../../model/tipos-agentes.model';

/**
 * TODO: Description of {@code TiposAgentesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-agentes',
    templateUrl: './tipos-agentes.component.html',
    standalone: false,
    styleUrls: ['./tipos-agentes.component.css']
})
export class TiposAgentesComponent extends GenericComponent<TiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposAgentesViewModel) {
        super(entityInstance);
    }

}
