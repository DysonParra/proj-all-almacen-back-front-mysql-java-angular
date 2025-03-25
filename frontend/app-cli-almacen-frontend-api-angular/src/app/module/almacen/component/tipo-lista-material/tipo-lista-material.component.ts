/*
 * @fileoverview    {TipoListaMaterialComponent}
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
import { TipoListaMaterialViewModel } from '../../model/tipo-lista-material.model';

/**
 * TODO: Description of {@code TipoListaMaterialComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-lista-material',
    templateUrl: './tipo-lista-material.component.html',
    standalone: false,
    styleUrls: ['./tipo-lista-material.component.css']
})
export class TipoListaMaterialComponent extends GenericComponent<TipoListaMaterialViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoListaMaterialViewModel) {
        super(entityInstance);
    }

}
