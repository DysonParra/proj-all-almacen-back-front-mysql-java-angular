/*
 * @fileoverview    {TiposDocumentosConceptosComponent}
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
import { TiposDocumentosConceptosViewModel } from '../../model/tipos-documentos-conceptos.model';

/**
 * TODO: Description of {@code TiposDocumentosConceptosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos-conceptos',
    templateUrl: './tipos-documentos-conceptos.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos-conceptos.component.css']
})
export class TiposDocumentosConceptosComponent extends GenericComponent<TiposDocumentosConceptosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosConceptosViewModel) {
        super(entityInstance);
    }

}
