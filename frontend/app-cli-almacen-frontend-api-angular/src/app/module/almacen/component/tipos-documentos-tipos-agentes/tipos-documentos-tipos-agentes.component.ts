/*
 * @overview        {TiposDocumentosTiposAgentesComponent}
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
import { TiposDocumentosTiposAgentesViewModel } from '../../model/tipos-documentos-tipos-agentes.model';

/**
 * TODO: Description of {@code TiposDocumentosTiposAgentesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos-tipos-agentes',
    templateUrl: './tipos-documentos-tipos-agentes.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos-tipos-agentes.component.css']
})
export class TiposDocumentosTiposAgentesComponent extends GenericComponent<TiposDocumentosTiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosTiposAgentesViewModel) {
        super(entityInstance);
    }

}
