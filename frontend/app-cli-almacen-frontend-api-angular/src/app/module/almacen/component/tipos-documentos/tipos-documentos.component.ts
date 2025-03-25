/*
 * @fileoverview    {TiposDocumentosComponent}
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
import { TiposDocumentosViewModel } from '../../model/tipos-documentos.model';

/**
 * TODO: Description of {@code TiposDocumentosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos',
    templateUrl: './tipos-documentos.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos.component.css']
})
export class TiposDocumentosComponent extends GenericComponent<TiposDocumentosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosViewModel) {
        super(entityInstance);
    }

}
