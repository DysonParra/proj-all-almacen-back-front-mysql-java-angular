/*
 * @overview        {BodegasComponent}
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
import { BodegasViewModel } from '../../model/bodegas.model';

/**
 * TODO: Description of {@code BodegasComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-bodegas',
    templateUrl: './bodegas.component.html',
    standalone: false,
    styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent extends GenericComponent<BodegasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BodegasViewModel) {
        super(entityInstance);
    }

}
